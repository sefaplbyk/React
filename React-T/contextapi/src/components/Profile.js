import { useUser } from "../Context/UserContext";
import { useState } from "react";

function Profile() {
  // kendi oluşturduğumuz hooku çağırıp arkada şu işlemi yaptıyoruz=>useContext hook'una ThemeContext componentini veriyoruz ve o componentten dönen tüm statelere bu şekilde erişebiliyoruz
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "splbyk", bio: "lorem ipsum" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>{loading ? "loading" : "login"}</button>
      )}

      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;
