import { DataSource } from "typeorm";
import { InforCoche } from "./models/inforCoche.model";
import User from "./models/user.model";
import * as dotenv from "dotenv";

dotenv.config();

const AppDataSource: DataSource = new DataSource({
  type: "postgres",
  host: process.env.DBHOST!,
  port: parseInt(process.env.DBPORT!),
  username: process.env.DBUSER!,
  password: process.env.DBPASS!,
  database: process.env.DBNAME!,
  entities: [InforCoche],
});

const AppDataSource2: DataSource = new DataSource({
  type: "postgres",
  host: process.env.DBHOST!,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DBUSER!,
  password: process.env.DBPASS!,
  database: process.env.DBNAME!,
  entities: [User],
});

export async function testConnection(): Promise<void> {
  try {
    await AppDataSource.initialize();
    await AppDataSource2.initialize();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();
