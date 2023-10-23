import { STRIPESECRETKEY } from "@/global";
import AuthUser from "@/middleware/AuthUser";
import { NextResponse } from "next/server";

const stripe = require("stripe")(
  `${STRIPESECRETKEY}`
);

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const res = await req.json();

      // console.log('res stripe --> ', res);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: res,
        mode: "payment",
        success_url: "http://localhost:3000/checkout" + "?status=success",
        cancel_url: "http://localhost:3000/checkout" + "?status=cancel",
      });
      // console.log('session stripe --> ', session);

      return NextResponse.json({
        success: true,
        id: session.id,
      });
    } else {
      return NextResponse.json({
        success: true,
        message: "No estas autenticado",
      });
    }
  } catch (e) {
    // console.log(e);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "¡Algo salió mal! Inténtalo de nuevo",
    });
  }
}
