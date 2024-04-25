import { axiosWithAuth } from '@/api/interceptors';
import { ITimeBlock, TypeTimeBlockFormState } from '@/models/timeBlock.models';

class TimeBlockService {
  private BASE_URL = '/user/time-blocks'

  async getTimeBlocks() {
    const response = await axiosWithAuth.get<ITimeBlock[]>(this.BASE_URL)

    return response
  }

  async createTimeBlock(data: TypeTimeBlockFormState) {
    const response = await axiosWithAuth.post<TypeTimeBlockFormState>(this.BASE_URL, data)
  }

  async updateOrderTimeBlock(data: ITimeBlock[]) {
    const response = await axiosWithAuth.put<ITimeBlock[]>(this.BASE_URL, data)

    return response
  }
  async updateTimeBlock(id: string, data: TypeTimeBlockFormState) {
    const response = await axiosWithAuth.put<ITimeBlock>(`${this.BASE_URL}/${id}`, data)

    return response
  }
  async deleteTimeBlock(id: string) {
    const response = await axiosWithAuth.delete<ITimeBlock>(`${this.BASE_URL}/${id}`)

    return response
  }
}

export const timeBlockService = new TimeBlockService()