import axios from 'axios'
import api from '.'
import { TRepo } from '../types/repo'

interface GetReposResponse {
  data: TRepo[]
}

export const getReposRequest = async (githubUsername: string) => {
  try {
    const { data } = await api.get<GetReposResponse>(`/${githubUsername}/repos`)

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        error: true,
        message: error.message
      }
    }

    return {
      error: true,
      message: 'Houve um erro buscando os repositórios. Por favor, tente mais tarde.'
    }
  }
}
