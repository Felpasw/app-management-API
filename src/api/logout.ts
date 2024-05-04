const logout = async (req, res) => {
  res.clearCookie("cookieID")
  return res.sendStatus(200)
}

export default {
  logout,
}
