import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  firstname?: string
  lastName?: string
}

const UserSchema = new Schema({
  email: String,
  firstname: String,
  lastName: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
