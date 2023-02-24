import { BadRequest } from '../helpers/http-helper'
import type { Controller } from '../protocols/controller'
import { MissingParamError } from '../errors/missing-param-error'
import type { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return BadRequest(new MissingParamError(field))
      }
    }

    return BadRequest(new Error('All fields is required'))
  }
}
