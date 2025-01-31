import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const SHEET_ID = process.env.SHEET_ID!;
const SHEET_INDEX = 0;

// Carregar credenciais do .env.local
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { presenca, nomeCompleto, email, celular, quantidade, nomes } = data;

    const jwt = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(SHEET_ID, jwt);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[SHEET_INDEX];

    await sheet.addRow({
      Presença: presenca,
      "Nome Completo": nomeCompleto,
      Email: email,
      Celular: celular,
      "Quantidade de Pessoas": quantidade,
      "Nomes das Pessoas": nomes,
    });

    return NextResponse.json({ message: "Dados salvos com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao salvar os dados:", error);
    return NextResponse.json({ message: "Erro ao salvar os dados" }, { status: 500 });
  }
}
