public ActionResult ExportWord(FormCollection form)
{
      StringBuilder sb = new StringBuilder();
      string html = Server.UrlDecode(form["hidWord"]);
      sb.Append("<!DOCTYPE html>");
      sb.Append("<body>");
      sb.Append(html);
      sb.Append("</body>");
      var byteArray = System.Text.Encoding.Default.GetBytes(sb.ToString());
      Response.ContentEncoding = System.Text.Encoding.GetEncoding("gb2312");
      return File(byteArray, "application/ms-word", "word"+ ".doc");
 }

