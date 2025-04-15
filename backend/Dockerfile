# Build Stage
FROM node:22 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

# Run Stage (smaller image)
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 5000
CMD ["node", "index.js"]

