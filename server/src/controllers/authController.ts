import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

export const createToken = (user) => {
    const token = jwt.sign({
        id: user.id
    },
    process.env.JWT_SECRET
    )
    return token
}

const comparePassword = (passwrod, hash) => {
    return bcrypt.compare(passwrod, hash);
}

const createPassword = (password) => {
    return bcrypt.hash(password)
};