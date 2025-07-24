import servicesData from "@/services/mockData/services.json"

class ServicesService {
  constructor() {
    this.services = [...servicesData]
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 200))
  }

  async getAll() {
    await this.delay()
    return [...this.services]
  }

  async getById(id) {
    await this.delay()
    const service = this.services.find(s => s.Id === parseInt(id))
    if (!service) {
      throw new Error(`Service with Id ${id} not found`)
    }
    return { ...service }
  }

  async create(serviceData) {
    await this.delay()
    const maxId = Math.max(...this.services.map(s => s.Id), 0)
    const newService = {
      Id: maxId + 1,
      ...serviceData
    }
    this.services.push(newService)
    return { ...newService }
  }

  async update(id, serviceData) {
    await this.delay()
    const index = this.services.findIndex(s => s.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Service with Id ${id} not found`)
    }
    this.services[index] = { ...this.services[index], ...serviceData }
    return { ...this.services[index] }
  }

  async delete(id) {
    await this.delay()
    const index = this.services.findIndex(s => s.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Service with Id ${id} not found`)
    }
    const deletedService = this.services.splice(index, 1)[0]
    return { ...deletedService }
  }
}

export default new ServicesService()