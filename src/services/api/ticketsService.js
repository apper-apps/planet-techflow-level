import ticketsData from "@/services/mockData/tickets.json"

class TicketsService {
  constructor() {
    this.tickets = [...ticketsData]
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 200))
  }

  async getAll() {
    await this.delay()
    return [...this.tickets]
  }

  async getById(id) {
    await this.delay()
    const ticket = this.tickets.find(t => t.Id === parseInt(id))
    if (!ticket) {
      throw new Error(`Ticket with Id ${id} not found`)
    }
    return { ...ticket }
  }

  async create(ticketData) {
    await this.delay()
    const maxId = Math.max(...this.tickets.map(t => t.Id), 0)
    const newTicket = {
      Id: maxId + 1,
      ...ticketData
    }
    this.tickets.push(newTicket)
    return { ...newTicket }
  }

  async update(id, ticketData) {
    await this.delay()
    const index = this.tickets.findIndex(t => t.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Ticket with Id ${id} not found`)
    }
    this.tickets[index] = { ...this.tickets[index], ...ticketData }
    return { ...this.tickets[index] }
  }

  async delete(id) {
    await this.delay()
    const index = this.tickets.findIndex(t => t.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Ticket with Id ${id} not found`)
    }
    const deletedTicket = this.tickets.splice(index, 1)[0]
    return { ...deletedTicket }
  }
}

export default new TicketsService()