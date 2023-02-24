import { BadRequest } from '../helpers/http-helper'
import { MissingParamError } from '../errors/missing-param-error'
import type { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return BadRequest(new MissingParamError(field))
      }
    }

    return BadRequest(new Error('Bad Request'))
  }
}
