import bcrypt from 'bcrypt'

export class RegisterDto {
    constructor(data) {
        if (!((data.username && data.password && data.confirmPassword) && (data.password === data.confirmPassword))) {
            throw new Error('Username and password cannot be empty and both passwords fields must to be equals')
        }
        this.username = data.username
        this.password = data.password
    }

    static async create(data) {
        const dto = new RegisterDto(data)

        dto.password = await bcrypt.hash(dto.password, 10)
        return dto
    }
}