ARG ALPINE_VERSION=3.20
ARG NODE_VERSION=20.15.1-r0

FROM mcr.microsoft.com/devcontainers/base:alpine-${ALPINE_VERSION}

ARG NODE_VERSION
RUN apk update && apk add --no-cache nodejs=${NODE_VERSION} npm

WORKDIR /workspaces/datc
