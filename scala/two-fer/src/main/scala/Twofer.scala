object Twofer {
  def twofer(name: String = ""): String = {
    if (Option(name).exists(_.nonEmpty))
      s"One for $name, one for me."
    else
      "One for you, one for me."
  }
}