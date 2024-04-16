import fs from "fs";
import path from "path";
import HomePage from "../components/HomePage";

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "public/data", "items.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const items = JSON.parse(jsonData);
  return { props: { items } };
}

export default function Index({ items }) {
  return <HomePage items={items} />;
}
