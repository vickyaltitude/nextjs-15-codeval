//so slot follows the convention of having @ in the folder name and its parallel routing which helps in many ways..

export default function ComplexLayout({
  children,
  notifications,
  revenue,
  users,
  login,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn: boolean = true;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div
        style={{
          display: "flex",
          width: "400px",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              background: "skyblue",
            }}
          >
            {revenue}
          </div>
          <div
            style={{
              width: "100%",
              height: "150px",
              background: "lightgreen",
            }}
          >
            {notifications}
          </div>
        </div>

        <div
          style={{
            width: "150px",
            background: "lightpink",
            flexGrow: 1,
          }}
        >
          {users}
        </div>
      </div>
    </>
  ) : (
    login
  );
}
