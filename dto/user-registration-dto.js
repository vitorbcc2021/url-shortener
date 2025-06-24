import bcrypt from 'bcrypt'

export class UserRegistrationDto {
    constructor(data) {
        if(!data.username || !data.password){
            throw new Error('Username and password cannot be empty!')
        }
        this.username = data.username
        this.password = data.password
    }

    static async create(data) {
        const dto = new UserRegistrationDto(data)

        dto.password = await bcrypt.hash(dto.password, 10)
        return dto
    }
}