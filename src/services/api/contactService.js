import contactData from "@/services/mockData/contacts.json"

class ContactService {
  constructor() {
    this.contacts = [...contactData]
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 200))
  }

  async getAll() {
    await this.delay()
    return [...this.contacts]
  }

  async getById(id) {
    await this.delay()
    const contact = this.contacts.find(c => c.Id === parseInt(id))
    if (!contact) {
      throw new Error(`Contact with Id ${id} not found`)
    }
    return { ...contact }
  }

  async create(contactData) {
    await this.delay()
    const maxId = Math.max(...this.contacts.map(c => c.Id), 0)
    const newContact = {
      Id: maxId + 1,
      ...contactData
    }
    this.contacts.push(newContact)
    return { ...newContact }
  }

  async update(id, contactUpdateData) {
    await this.delay()
    const index = this.contacts.findIndex(c => c.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Contact with Id ${id} not found`)
    }
    this.contacts[index] = { ...this.contacts[index], ...contactUpdateData }
    return { ...this.contacts[index] }
  }

  async delete(id) {
    await this.delay()
    const index = this.contacts.findIndex(c => c.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Contact with Id ${id} not found`)
    }
    const deletedContact = this.contacts.splice(index, 1)[0]
    return { ...deletedContact }
  }
}

export default new ContactService()