

# Stock Price Query API

This API is built using the **NestJS framework** and **MongoDB** database (with Mongoose as the ORM). It allows querying stock closing prices for dates between **01/04/2024** and **25/03/2025**.

## Features

- **Efficient Querying**: 
  - Optimized queries using MongoDB **compound indexing**.
  - Supports querying by stock symbol and date.

- **Validation**:
  - Input validation is implemented using **class-validator**.

- **Security**:
  - Prevents XSS attacks using the **Helmet module**.
  - Handles common web vulnerabilities to ensure secure data access.

- **Error Handling**:
  - Comprehensive exception handling to ensure reliable error responses.

- **Code Architecture**:
  - Implements the **Repository pattern** for cleaner and modular code.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sarathsuryas/stock-price-api-machine-task.git
   cd stock-price-api-machine-task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

### Development Mode
```bash
npm run start
```

### Watch Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run start:prod
```

---

## API Endpoints

### Query Stock Price
**GET** `/api/stock-price`

- **Query Parameters**:
  - `symbol`: (Required) Stock symbol (e.g., `TATASTEEL`).
  - `date`: (Required) Date in `YYYY-MM-DD` format (e.g., `2024-04-01`).

- **Example Request**:
  ```http
  GET http://localhost:5000/api/stock-price?symbol=GOOG&date=2024-04-01
  ```

- **Example Response**:
  ```json
  {
    "symbol": "GOOG",
    "date": "2024-04-01",
    "closingPrice": 754.25
  }
  ```

---

## Highlights

1. **Compound Indexing**:
   - A compound index is created on `symbol` and `date` fields for faster queries:
     ```javascript
     db.collection.createIndex({ symbol: 1, date: 1 });
     ```

2. **Validation**:
   - Ensures the `symbol` is alphanumeric and the `date` is in the correct format using `class-validator`.

3. **Error Handling**:
   - Handles invalid requests, missing data, and database errors gracefully.

4. **Security**:
   - Uses `Helmet` to protect against cross-site scripting (XSS) and other vulnerabilities.

---

## Technologies Used

- **NestJS**: Framework for building scalable server-side applications.
- **MongoDB**: NoSQL database for storing stock data.
- **Mongoose**: ODM for MongoDB integration.
- **class-validator**: Validation library for validating incoming data.
- **Helmet**: Middleware to enhance security.

---

## Project Structure

```plaintext
src/
├── app.module.ts       # Root module
├── stockstats/         # Stockstats module
│   ├── stockstats.controller.ts  # Handles API requests
│   ├── stockstats.service.ts     # Business logic
│   ├── stockstats.repository.ts  # Database interactions
│   ├── dtos/           # DTOs for request validation
    └── schemas/       # MongoDB schemas

```

---

## Future Enhancements

- Add caching for frequently queried symbols and dates.
- Implement user authentication for secure access.
- Enhance API documentation with tools like Swagger.
- Support bulk querying for multiple dates or symbols.

---


