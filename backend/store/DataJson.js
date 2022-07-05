
import fs from 'fs'

export class DataJson {
  constructor () {
    this._dataPath = './store/db.json'
    this.setTables()
  }

  setTables () {
    const tables = {
      user: [],
      song: [],
      playlist: []
    }
    const items = this.readJsonFile()
    if (items.length === 0) {
      this.writeJsonFile(tables)
    }
  }

  readJsonFile () {
    const contentFile = fs.readFileSync(this._dataPath, 'utf-8')
    if (contentFile) {
      return JSON.parse(contentFile)
    }
    return []
  }

  writeJsonFile (data) {
    const jsonData = JSON.stringify(data, null, '')
    fs.writeFileSync(this._dataPath, jsonData)
  }

  generatePk (table) {
    const lastItem = this.all(table).pop()
    if (lastItem) {
      return ++lastItem._id
    }
    return 1
  }

  save (table, data) {
    const items = this.readJsonFile()
    data._id = this.generatePk(table)
    items[table].push(data)
    this.writeJsonFile(items)
    return 'created succesfully'
  }

  all (table) {
    const items = this.readJsonFile()
    return items[table] || table
  }

  finByAtribute (table, atribute, value) {
    const items = this.readJsonFile()
    const item = items[table].find(item => item[atribute] === value)
    if (item) {
      return item
    }
    return null
  }
}

/* const test = new DataJson()
const result = test.finByAtribute('song', '_title', 'song.title')
console.table(result) */

/* const data = new DataJson()
data.save('user',{id: null, name:"Daniel",singer:"Bernal"})
const result = data.all('user')
console.table(result) */
