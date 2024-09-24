import { Injectable } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

@Injectable()
export class AuthHashService {
    async hashValue(value: string): Promise<string> {
        const scrypt = promisify(_scrypt);
        const salt = randomBytes(8).toString('hex');
        const hash = await scrypt(value, salt, 32) as Buffer;
        const hashedValue = `${salt}.${hash.toString('hex')}`;
        return hashedValue;
    }

    async validateHash(value: string): Promise<boolean> {
        const scrypt = promisify(_scrypt);
        const [salt, storedHashedValue] = value.split('.');
        const hash = await scrypt(value, salt, 32) as Buffer;
        const valid = storedHashedValue === hash.toString('hex');

        return valid;
    }
}
