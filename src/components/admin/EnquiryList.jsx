import EnquiryCard from "./EnquiryCard";

export default function EnquiryList({ enquiries, refresh }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {enquiries.map((item) => (
        <EnquiryCard key={item.id} item={item} refresh={refresh} />
      ))}
    </div>
  );
}
