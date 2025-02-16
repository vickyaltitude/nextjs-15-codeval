//so slot follows the convention of having @ in the folder name and its parallel routing which helps in many ways..

export default function ComplexLayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{revenue}</div>
      <div>{users}</div>
      <div>{notifications}</div>
    </>
  );
}
