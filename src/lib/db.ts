import oracledb from 'oracledb';

const dbConfig: oracledb.ConnectionAttributes = {
  user: process.env.ORACLE_USER!,
  password: process.env.ORACLE_PASSWORD!,
  connectString: process.env.ORACLE_CONNECTION_STRING!,
};

export const db = {
  async connect(): Promise<oracledb.Connection> {
    try {
      const connection = await oracledb.getConnection({
        ...dbConfig,
        autoCommit: true,
      });
      return connection;
    } catch (error) {
      console.error('Error connecting to Oracle database:', error);
      throw error;
    }
  },

  async getUserByEmail(email: string) {
    const connection = await this.connect();
    try {
      const result = await connection.execute(
        'SELECT * FROM users WHERE email = :email',
        { email },
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      return result.rows[0];
    } finally {
      await connection.close();
    }
  },

  // Add more database operations here
};