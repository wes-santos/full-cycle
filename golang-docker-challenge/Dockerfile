FROM golang:1.22-alpine AS builder

WORKDIR /usr/src/app

COPY ./main.go .
RUN go build main.go

FROM hello-world
COPY --from=builder /usr/src/app/main .
CMD ["./main"]
