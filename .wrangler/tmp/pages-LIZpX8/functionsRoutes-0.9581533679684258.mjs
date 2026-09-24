import { onRequestPost as __gui_mail_js_onRequestPost } from "W:\\RepoLocall\\jtmc\\functions\\gui-mail.js"

export const routes = [
    {
      routePath: "/gui-mail",
      mountPath: "/",
      method: "POST",
      middlewares: [],
      modules: [__gui_mail_js_onRequestPost],
    },
  ]