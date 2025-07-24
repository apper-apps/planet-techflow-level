import testimonialsData from "@/services/mockData/testimonials.json"

class TestimonialsService {
  constructor() {
    this.testimonials = [...testimonialsData]
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 200))
  }

  async getAll() {
    await this.delay()
    return [...this.testimonials]
  }

  async getById(id) {
    await this.delay()
    const testimonial = this.testimonials.find(t => t.Id === parseInt(id))
    if (!testimonial) {
      throw new Error(`Testimonial with Id ${id} not found`)
    }
    return { ...testimonial }
  }

  async create(testimonialData) {
    await this.delay()
    const maxId = Math.max(...this.testimonials.map(t => t.Id), 0)
    const newTestimonial = {
      Id: maxId + 1,
      ...testimonialData
    }
    this.testimonials.push(newTestimonial)
    return { ...newTestimonial }
  }

  async update(id, testimonialData) {
    await this.delay()
    const index = this.testimonials.findIndex(t => t.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Testimonial with Id ${id} not found`)
    }
    this.testimonials[index] = { ...this.testimonials[index], ...testimonialData }
    return { ...this.testimonials[index] }
  }

  async delete(id) {
    await this.delay()
    const index = this.testimonials.findIndex(t => t.Id === parseInt(id))
    if (index === -1) {
      throw new Error(`Testimonial with Id ${id} not found`)
    }
    const deletedTestimonial = this.testimonials.splice(index, 1)[0]
    return { ...deletedTestimonial }
  }
}

export default new TestimonialsService()