import { BadRequest } from '../helpers/http-helper'
import { MissingParamError } from '../errors/missing-param-error'
import type { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return BadRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.email) {
      return BadRequest(new MissingParamError('email'))
    }

    return BadRequest(new Error('Bad Request'))
  }
}
