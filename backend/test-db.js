const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres.iujzyjqzftzkrtpaypqi:vxLhLU1AcViTapqo@aws-1-us-west-2.pooler.supabase.com:5432/postgres",
  ssl: {
    rejectUnauthorized: false
  }
});

async function test() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("✅ Conectado!", result.rows);
  } catch (err) {
    console.error("❌ Erro:", err);
  }
}

test();