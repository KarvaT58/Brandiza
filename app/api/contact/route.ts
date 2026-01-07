import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      )
    }

    // Aqui você pode integrar com um serviço de email como Resend, SendGrid, etc.
    // Por enquanto, apenas logamos os dados
    console.log("Nova mensagem de contato:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implementar envio de email real
    // Exemplo com Resend:
    // await resend.emails.send({
    //   from: 'contato@sitedemo.com',
    //   to: 'seu-email@exemplo.com',
    //   subject: `Nova mensagem de ${name}`,
    //   html: `<p>Email: ${email}</p><p>Mensagem: ${message}</p>`
    // })

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao processar contato:", error)
    return NextResponse.json(
      { error: "Erro ao processar sua mensagem. Tente novamente." },
      { status: 500 }
    )
  }
}







