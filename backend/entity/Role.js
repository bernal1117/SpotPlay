export default class Role {
  constructor (role) {
    this._id = role.id
    this._name = role.name
    this._description = role.description
    this._editor = role.editor || false
  }
}
