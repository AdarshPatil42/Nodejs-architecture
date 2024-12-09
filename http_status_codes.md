# HTTP Status Codes

## 1xx: Informational Responses

- **100 Continue**
  - **Meaning**: The server has received the request headers, and the client should proceed to send the request body.
  - **Message**: "Continue sending the request."
- **101 Switching Protocols**

  - **Meaning**: The server is switching protocols as requested by the client.
  - **Message**: "Switching protocols."

- **102 Processing**
  - **Meaning**: The server is processing the request, but no response is available yet.
  - **Message**: "Request is being processed."

## 2xx: Success

- **200 OK**

  - **Meaning**: The request was successful, and the server has sent the requested data.
  - **Message**: "Request successful."

- **201 Created**

  - **Meaning**: The request was successful, and a new resource has been created.
  - **Message**: "Resource created successfully."

- **202 Accepted**

  - **Meaning**: The request has been accepted for processing, but the processing is not yet complete.
  - **Message**: "Request accepted for processing."

- **204 No Content**

  - **Meaning**: The request was successful, but there is no content to send in the response.
  - **Message**: "No content to return."

- **205 Reset Content**

  - **Meaning**: The server successfully processed the request and is prompting the client to reset the view.
  - **Message**: "Content reset successfully."

- **206 Partial Content**
  - **Meaning**: The server is delivering part of the resource as requested by the client, typically for large files.
  - **Message**: "Partial content returned."

## 3xx: Redirection

- **301 Moved Permanently**

  - **Meaning**: The resource has permanently moved to a new URL.
  - **Message**: "Resource permanently moved to [new URL]."

- **302 Found (Temporary Redirect)**

  - **Meaning**: The resource is temporarily located at a different URL.
  - **Message**: "Resource temporarily moved to [new URL]."

- **303 See Other**

  - **Meaning**: The client should make a GET request to another URL.
  - **Message**: "See other resource at [new URL]."

- **304 Not Modified**

  - **Meaning**: The resource has not been modified since the last request.
  - **Message**: "Resource not modified."

- **307 Temporary Redirect**

  - **Meaning**: The resource is temporarily available at a different URL.
  - **Message**: "Resource temporarily redirected to [new URL]."

- **308 Permanent Redirect**
  - **Meaning**: The resource has permanently moved to a new URL.
  - **Message**: "Resource permanently moved to [new URL]."

## 4xx: Client Errors

- **400 Bad Request**

  - **Meaning**: The server could not understand the request due to invalid syntax.
  - **Message**: "Bad request. Invalid syntax."

- **401 Unauthorized**

  - **Meaning**: The request lacks valid authentication credentials.
  - **Message**: "Unauthorized. Please provide valid credentials."

- **402 Payment Required**

  - **Meaning**: Reserved for future use. It indicates the need for payment.
  - **Message**: "Payment required."

- **403 Forbidden**

  - **Meaning**: The server understood the request but refuses to authorize it.
  - **Message**: "Forbidden. You do not have permission."

- **404 Not Found**

  - **Meaning**: The requested resource could not be found on the server.
  - **Message**: "Resource not found."

- **405 Method Not Allowed**

  - **Meaning**: The HTTP method used is not allowed for the resource.
  - **Message**: "Method not allowed."

- **406 Not Acceptable**

  - **Meaning**: The server cannot provide a response that matches the client's accept headers.
  - **Message**: "Not acceptable."

- **407 Proxy Authentication Required**

  - **Meaning**: The client must authenticate with a proxy server.
  - **Message**: "Proxy authentication required."

- **408 Request Timeout**

  - **Meaning**: The server timed out waiting for the request from the client.
  - **Message**: "Request timeout."

- **409 Conflict**

  - **Meaning**: The request could not be completed due to a conflict with the current state of the resource.
  - **Message**: "Conflict with current state."

- **410 Gone**

  - **Meaning**: The resource is no longer available and will not be available again.
  - **Message**: "Resource is gone."

- **411 Length Required**

  - **Meaning**: The server requires the `Content-Length` header in the request.
  - **Message**: "Content-Length header required."

- **412 Precondition Failed**

  - **Meaning**: One or more conditions specified in the request header fields were not met.
  - **Message**: "Precondition failed."

- **413 Payload Too Large**

  - **Meaning**: The request is larger than the server is willing or able to process.
  - **Message**: "Request payload too large."

- **414 URI Too Long**

  - **Meaning**: The URI provided was too long for the server to process.
  - **Message**: "URI too long."

- **415 Unsupported Media Type**

  - **Meaning**: The server refuses to process the request because the media type is not supported.
  - **Message**: "Unsupported media type."

- **416 Range Not Satisfiable**

  - **Meaning**: The client has asked for a portion of the resource that cannot be fulfilled.
  - **Message**: "Range not satisfiable."

- **417 Expectation Failed**

  - **Meaning**: The server cannot meet the requirements of the `Expect` header.
  - **Message**: "Expectation failed."

- **418 I'm a teapot** (RFC 2324, humorous)

  - **Meaning**: The teapot refuses to brew coffee because it is a teapot.
  - **Message**: "I'm a teapot, not a coffee brewer."

- **421 Misdirected Request**

  - **Meaning**: The request was directed to a server that is not able to produce a response.
  - **Message**: "Misdirected request."

- **422 Unprocessable Entity**

  - **Meaning**: The server understands the content type but was unable to process the contained instructions.
  - **Message**: "Unprocessable entity."

- **423 Locked**

  - **Meaning**: The resource is locked and cannot be modified.
  - **Message**: "Resource locked."

- **424 Failed Dependency**

  - **Meaning**: The request failed because of a failure in a previous request.
  - **Message**: "Failed dependency."

- **425 Too Early**

  - **Meaning**: The server is unwilling to risk processing a request that might be replayed.
  - **Message**: "Too early to process."

- **426 Upgrade Required**

  - **Meaning**: The client should switch to a different protocol.
  - **Message**: "Upgrade required."

- **428 Precondition Required**

  - **Meaning**: The origin server requires the request to be conditional.
  - **Message**: "Precondition required."

- **429 Too Many Requests**

  - **Meaning**: The user has sent too many requests in a given amount of time.
  - **Message**: "Too many requests. Please try again later."

- **431 Request Header Fields Too Large**

  - **Meaning**: The server is refusing to process the request because the request headers are too large.
  - **Message**: "Request headers too large."

- **451 Unavailable For Legal Reasons**
  - **Meaning**: The resource is unavailable due to legal reasons.
  - **Message**: "Unavailable for legal reasons."

## 5xx: Server Errors

- **500 Internal Server Error**

  - **Meaning**: The server encountered an unexpected condition that prevented it from fulfilling the request.
  - **Message**: "Internal server error."

- **501 Not Implemented**

  - **Meaning**: The server does not support the functionality required to fulfill the request.
  - **Message**: "Not implemented."

- **502 Bad Gateway**

  - **Meaning**: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
  - **Message**: "Bad gateway."

- **503 Service Unavailable**

  - **Meaning**: The server is currently unable to handle the request due to temporary overloading or maintenance.
  - **Message**: "Service unavailable."

- **504 Gateway Timeout**

  - **Meaning**: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
  - **Message**: "Gateway timeout."

- **505 HTTP Version Not Supported**

  - **Meaning**: The server does not support the HTTP protocol version that was used in the request.
  - **Message**: "HTTP version not supported."

- **507 Insufficient Storage**

  - **Meaning**: The server is unable to store the representation needed to complete the request.
  - **Message**: "Insufficient storage."

- **508 Loop Detected**
  - **Meaning**: The server detected an infinite loop while processing a request.
  - **Message**: "Loop detected."
