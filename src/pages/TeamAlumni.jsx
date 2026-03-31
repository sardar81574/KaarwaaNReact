import { useState, useRef } from "react";

const batches = [
  {
    year: "2021–25",
    label: "Current Batch",
    members: [
      { name: "Mr. Arpit Yadav", role: "President" },
      { name: "Mr. Meghraj Jain", role: "Superintendent" },
      { name: "Ms. Kishita Patel", role: "Vice President" },
      { name: "Mr. Atharv Vibhute", role: "Secretary" },
      { name: "Ms. Piyali Saha", role: "Secretary" },
      { name: "Mr. Nikhil Tiwari", role: "Secretary" },
      { name: "Mr. Gaurav Soni", role: "Treasurer" },
      { name: "Ms. Divita Saikia", role: "Media Head" },
      { name: "Mr. Ankit Sadiwal", role: "Media Head" },
      { name: "Mr. Jai Nirkhe", role: "Teaching Head" },
      { name: "Mr. Prince Sahu", role: "Teaching Head" },
      { name: "Mr. Mrigank Raj Dubey", role: "Technical Head" },
      { name: "Mr. Anirudh Jain", role: "Orphanage Head" },
      { name: "Ms. Kashish Meghani", role: "Orphanage Head" },
      { name: "Mr. Prajwal Nikhade", role: "Event Manager" },
      { name: "Mr. Deepak Prajapati", role: "Exam Co-ordinator" },
    ],
  },
  {
    year: "2020–24",
    label: "Alumni",
    members: [
      { name: "Mr. Amar Singh Garg", role: "President" },
      { name: "Mr. Akshat Rahangdale", role: "Superintendent" },
      { name: "Ms. Richa Gupta", role: "Vice President" },
      { name: "Mr. Harshwardhan Thakur", role: "Secretary" },
      { name: "Mr. Aditya Tripathi", role: "Treasurer" },
      { name: "Ms. Shishti Chaubey", role: "Media Head" },
      { name: "Ms. Shreya Gupta", role: "Media Head" },
      { name: "Mr. Rishabh Porwal", role: "Media Head" },
      { name: "Mr. Aman Kumar", role: "Technical Head" },
      { name: "Mr. Kumar Vaibhav", role: "Technical Head" },
      { name: "Mr. Aman Devaliya", role: "Technical Head" },
      { name: "Mr. Anubhav Verma", role: "Teaching Head" },
      { name: "Ms. Poornima Bhumarkar", role: "Teaching Head" },
      { name: "Mr. Naveen Prajapati", role: "Teaching Head" },
      { name: "Ms. Angel Tirkey", role: "Orphanage Head" },
      { name: "Ms. Astha", role: "Orphanage Head" },
      { name: "Mr. Gaurav Kumar", role: "Orphanage Head" },
      { name: "Mr. Sandeep Sharma", role: "Orphanage Head" },
      { name: "Mr. Abhishek Shukla", role: "Exam Co-ordinator" },
      { name: "Mr. Ankit Pandey", role: "Exam Co-ordinator" },
      { name: "Mr. Dipanshu Mishra", role: "Exam Co-ordinator" },
      { name: "Mr. Abhishek Shukla", role: "Event Manager" },
      { name: "Ms. Urvija Jha", role: "Event Manager" },
      { name: "Ms. Ayushi Sonwane", role: "Event Manager" },
      { name: "Mr. Prashant Pandey", role: "Event Manager" },
      { name: "Mr. Vishnu Mishra", role: "Core Member" },
      { name: "Mr. Vaibhav Rajawat", role: "Core Member" },
      { name: "Ms. Muskan Yadav", role: "Core Member" },
    ],
  },
  {
    year: "2019–23",
    label: "Alumni",
    members: [
      { name: "Mr. Shivam Birla", role: "President" },
      { name: "Mr. Tanmay Chourey", role: "Superintendent" },
      { name: "Ms. Palak Mishra", role: "Vice President" },
      { name: "Ms. Tejanshi Daushlya", role: "Secretary" },
      { name: "Mr. Adarsh Dwivedi", role: "Treasurer" },
    ],
  },
  {
    year: "2018–22",
    label: "Alumni",
    members: [
      { name: "Mr. Sanjeev Kumar", role: "President" },
      { name: "Ms. Shivani Karyam", role: "Vice President" },
      { name: "Mr. Bhoopendra Singh", role: "Secretary" },
      { name: "Ms. Divyanshi Jain", role: "Secretary" },
      { name: "Mr. Shubham Rimjha", role: "Media Head" },
      { name: "Mr. Ankit Yadav", role: "Treasurer" },
    ],
  },
  {
    year: "2017–21",
    label: "Alumni",
    members: [
      { name: "Mr. Yogendra Singh Rathor", role: "President" },
      { name: "Mr. Keshav Parihar", role: "Treasurer" },
    ],
  },
  {
    year: "2016–20",
    label: "Alumni",
    members: [
      { name: "Mr. Rahul Patidar", role: "President" },
      { name: "Ms. Ekta Barpete", role: "Vice President" },
      { name: "Mr. Himanshu Shankhla", role: "Member" },
      { name: "Mr. Nishant Nagwanshi", role: "Member" },
      { name: "Mr. Chanchal Singh Thakur", role: "Member" },
      { name: "Mr. Rishi Mishra", role: "Member" },
      { name: "Mr. Shubham Mishra", role: "Member" },
      { name: "Mr. Navneet", role: "Member" },
      { name: "Mr. Neetiraj Malviya", role: "Member" },
      { name: "Ms. Pooja Soni", role: "Member" },
      { name: "Ms. Sangeeta Paraste", role: "Member" },
      { name: "Ms. Aarti Dhurve", role: "Member" },
      { name: "Ms. Usha Suryawanshi", role: "Member" },
      { name: "Ms. Swati Soni", role: "Member" },
      { name: "Ms. Anshul Tripathi", role: "Member" },
      { name: "Ms. Shruti Singour", role: "Member" },
      { name: "Mr. Ankit Athnere", role: "Member" },
      { name: "Ms. Sonam", role: "Member" },
      { name: "Ms. Aradhna Mishra", role: "Member" },
      { name: "Mr. Shailendra Namdev", role: "Member" },
      { name: "Ms. Manisha Patel", role: "Member" },
      { name: "Mr. Deepak Patidar", role: "Member" },
      { name: "Mr. Sonu Bariya", role: "Member" },
      { name: "Mr. Ashutosh Dubey", role: "Member" },
      { name: "Mr. Saket Khare", role: "Member" },
      { name: "Mr. Aaryan Yadav", role: "Member" },
      { name: "Ms. Damini Rajak", role: "Member" },
      { name: "Mr. Himanshu Gupta", role: "Member" },
    ],
  },
  {
    year: "2015–19",
    label: "Alumni",
    members: [
      { name: "Mr. Neeraj Patidar", role: "President" },
      { name: "Ms. Rajni Pendro", role: "Member" },
      { name: "Ms. Shubhangi Singh", role: "Member" },
      { name: "Ms. Jagriti Mourya", role: "Member" },
      { name: "Ms. Ritika Watte", role: "Member" },
      { name: "Ms. Ayushi Khatik", role: "Member" },
      { name: "Ms. Yukta Pandey", role: "Member" },
      { name: "Mr. Shanu Singh", role: "Member" },
      { name: "Ms. Smriti Chaurasia", role: "Member" },
      { name: "Mr. Sankalp Garg", role: "Member" },
      { name: "Mr. Saurabh Singh Rajpoot", role: "Member" },
      { name: "Mr. Sudeep Kumar", role: "Member" },
      { name: "Mr. Ashutosh Mishra", role: "Treasurer" },
      { name: "Mr. Tohit Khan", role: "Member" },
      { name: "Mr. Abhishek Agrawal", role: "Member" },
      { name: "Ms. Shweta Machiwar", role: "Member" },
    ],
  },
  {
    year: "2014–18",
    label: "Alumni",
    members: [
      { name: "Mr. Shikhar Barve", role: "President" },
      { name: "Ms. Ayushi Jain", role: "Member" },
      { name: "Ms. Pragya Agrawal", role: "Member" },
      { name: "Mr. Shivani Mishra", role: "Member" },
      { name: "Mr. Umesh Patidar", role: "Member" },
      { name: "Mr. Sharad Kant Nagaich", role: "Member" },
      { name: "Mr. Karan Kumar Prajapati", role: "Member" },
    ],
  },
  {
    year: "2013–17",
    label: "Alumni",
    members: [
      { name: "Mr. Anoop Sharma", role: "President" },
      { name: "Mr. Ashish Bharadwaj", role: "Vice President" },
      { name: "Mr. Shubham Jain", role: "Member" },
      { name: "Mr. Tajasvi Saxena", role: "Member" },
      { name: "Mr. Anand Arole", role: "Member" },
      { name: "Mr. Amit Yadav", role: "Member" },
      { name: "Mr. Divyansh Jain", role: "Member" },
      { name: "Mr. Saurabh Jain", role: "Member" },
      { name: "Ms. Anchal Tiwari", role: "Member" },
      { name: "Ms. Divya Paroha", role: "Member" },
      { name: "Ms. Shweta Markam", role: "Member" },
      { name: "Ms. Shweta Singh", role: "Member" },
      { name: "Ms. Tripti Ratre", role: "Member" },
      { name: "Ms. Shubhangi Soni", role: "Member" },
    ],
  },
  {
    year: "2012–16",
    label: "Alumni",
    members: [
      { name: "Mr. Sandeep Mehta", role: "Member" },
      { name: "Ms. Sakshi Pandey", role: "Member" },
      { name: "Ms. Varsha Manglani", role: "Member" },
      { name: "Ms. Nimisha Prashant", role: "Member" },
      { name: "Ms. Kinjal Jain", role: "Member" },
      { name: "Ms. Paridhi Giriya", role: "Member" },
      { name: "Mr. Satya Prakash Bisariya", role: "Member" },
      { name: "Mr. Rishab Khampariya", role: "Member" },
      { name: "Mr. Yogendra Prajapati", role: "Member" },
      { name: "Mr. Mayank Nema", role: "Member" },
      { name: "Mr. Vikrant Pandey", role: "Member" },
      { name: "Mr. Rahul Jha", role: "Member" },
      { name: "Ms. Sampda Saraf", role: "Member" },
    ],
  },
  {
    year: "2011–15",
    label: "Alumni",
    members: [
      { name: "Mr. Saurav Kumar Dev", role: "Member" },
      { name: "Mr. Gaurav Patil", role: "Member" },
      { name: "Mr. Jitendra Kumar Tamiya", role: "Member" },
      { name: "Mr. Devendra Markam", role: "Member" },
      { name: "Mr. Himanshu Zharbade", role: "Member" },
      { name: "Mr. Surendra Emne", role: "Member" },
      { name: "Mr. Rajkumar Marskole", role: "Member" },
      { name: "Mr. Avinash Gupta", role: "Member" },
      { name: "Mr. Kamal Nath Dhurve", role: "Member" },
      { name: "Mr. Anurag Mishra", role: "Member" },
    ],
  },
];

const roleColors = {
  President: { bg: "#FEF3C7", text: "#92400E", dot: "#F59E0B" },
  Superintendent: { bg: "#EDE9FE", text: "#5B21B6", dot: "#8B5CF6" },
  "Vice President": { bg: "#DBEAFE", text: "#1E40AF", dot: "#3B82F6" },
  Secretary: { bg: "#D1FAE5", text: "#065F46", dot: "#10B981" },
  Treasurer: { bg: "#FEE2E2", text: "#991B1B", dot: "#EF4444" },
  "Media Head": { bg: "#FCE7F3", text: "#9D174D", dot: "#EC4899" },
  "Teaching Head": { bg: "#E0F2FE", text: "#0C4A6E", dot: "#0EA5E9" },
  "Technical Head": { bg: "#F0FDF4", text: "#14532D", dot: "#22C55E" },
  "Orphanage Head": { bg: "#FFF7ED", text: "#9A3412", dot: "#F97316" },
  "Event Manager": { bg: "#F5F3FF", text: "#4C1D95", dot: "#7C3AED" },
  "Exam Co-ordinator": { bg: "#ECFDF5", text: "#064E3B", dot: "#059669" },
  "Core Member": { bg: "#F8FAFC", text: "#334155", dot: "#64748B" },
  Member: { bg: "#F8FAFC", text: "#334155", dot: "#94A3B8" },
  "Vice-President": { bg: "#DBEAFE", text: "#1E40AF", dot: "#3B82F6" },
};

function getInitials(name) {
  const parts = name.replace(/^(Mr\.|Ms\.|Mrs\.)\s*/i, "").trim().split(" ");
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();
}

const avatarPalette = [
  ["#7C3AED", "#EDE9FE"],
  ["#0369A1", "#E0F2FE"],
  ["#065F46", "#D1FAE5"],
  ["#9D174D", "#FCE7F3"],
  ["#92400E", "#FEF3C7"],
  ["#1E40AF", "#DBEAFE"],
  ["#9A3412", "#FFF7ED"],
  ["#4C1D95", "#F5F3FF"],
];

function getAvatarColors(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return avatarPalette[Math.abs(hash) % avatarPalette.length];
}

function MemberCard({ member }) {
  const initials = getInitials(member.name);
  const [fg, bg] = getAvatarColors(member.name);
  const roleStyle = roleColors[member.role] || roleColors["Member"];

  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      border: "1px solid #F1F5F9",
      padding: "20px 16px 16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      transition: "box-shadow 0.2s, transform 0.2s",
      cursor: "default",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)";
      e.currentTarget.style.transform = "translateY(-3px)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "translateY(0)";
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: "50%",
        background: bg, color: fg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 700, fontSize: 18, letterSpacing: 1,
        border: `2px solid ${fg}22`,
        flexShrink: 0,
      }}>
        {initials}
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontWeight: 600, fontSize: 13, color: "#1E293B", lineHeight: 1.4 }}>
          {member.name.replace(/^(Mr\.|Ms\.|Mrs\.)\s*/i, "").trim()}
        </div>
        <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 1, fontWeight: 400 }}>
          {member.name.match(/^(Mr\.|Ms\.|Mrs\.)/i)?.[0] || ""}
        </div>
      </div>
      <span style={{
        background: roleStyle.bg, color: roleStyle.text,
        fontSize: 11, fontWeight: 600, padding: "3px 10px",
        borderRadius: 20, display: "flex", alignItems: "center", gap: 5,
        whiteSpace: "nowrap",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: roleStyle.dot, display: "inline-block" }} />
        {member.role}
      </span>
    </div>
  );
}

function BatchSection({ batch, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const isCurrentBatch = batch.label === "Current Batch";

  return (
    <div style={{ marginBottom: 16 }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", background: isCurrentBatch ? "#7C3AED" : "#F8FAFC",
          border: isCurrentBatch ? "none" : "1px solid #E2E8F0",
          borderRadius: open ? "12px 12px 0 0" : 12,
          padding: "14px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          cursor: "pointer", transition: "background 0.2s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{
            fontWeight: 700, fontSize: 17,
            color: isCurrentBatch ? "#fff" : "#1E293B",
            fontFamily: "Georgia, serif",
          }}>
            Batch {batch.year}
          </span>
          {isCurrentBatch && (
            <span style={{
              background: "#FDE68A", color: "#92400E",
              fontSize: 11, fontWeight: 700, padding: "2px 10px",
              borderRadius: 20,
            }}>
              ✦ Current
            </span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            fontSize: 12, fontWeight: 500,
            color: isCurrentBatch ? "#C4B5FD" : "#94A3B8",
          }}>
            {batch.members.length} members
          </span>
          <span style={{
            width: 24, height: 24, borderRadius: "50%",
            background: isCurrentBatch ? "#ffffff33" : "#E2E8F0",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: isCurrentBatch ? "#fff" : "#64748B",
            fontSize: 14, transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "none",
          }}>
            ▾
          </span>
        </div>
      </button>

      {open && (
        <div style={{
          border: "1px solid #E2E8F0", borderTop: "none",
          borderRadius: "0 0 12px 12px",
          padding: "20px",
          background: "#FAFBFF",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: 12,
          }}>
            {batch.members.map((m, i) => (
              <MemberCard key={i} member={m} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamAlumni() {
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  const allRoles = ["All", "President", "Vice President", "Superintendent", "Secretary", "Treasurer", "Media Head", "Teaching Head", "Technical Head", "Orphanage Head", "Event Manager", "Exam Co-ordinator", "Core Member", "Member"];

  const filteredBatches = batches.map(b => ({
    ...b,
    members: b.members.filter(m => {
      const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase());
      const matchRole = filterRole === "All" || m.role === filterRole || (filterRole === "Member" && m.role === "Kaarwaa.N Member");
      return matchSearch && matchRole;
    }),
  })).filter(b => b.members.length > 0);

  const totalMembers = batches.reduce((acc, b) => acc + b.members.length, 0);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 1000, margin: "0 auto", padding: "32px 20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 36,marginTop : 35 }}>
       
        <h1 style={{ fontSize: 38, fontWeight: 800, color: "#0F172A", margin: "0 0 8px", fontFamily: "Georgia, serif", letterSpacing: -1 }}>
          Our Team & Alumni
        </h1>
        <p style={{ color: "#64748B", fontSize: 15, margin: "0 0 20px" }}>
          Celebrating {totalMembers}+ members across {batches.length} batches since 2011
        </p>
        {/* Stats row */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {[
            { label: "Batches", value: batches.length },
            { label: "Total Members", value: `${totalMembers}+` },
            { label: "Years of Service", value: "14+" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "#F8FAFC", border: "1px solid #E2E8F0",
              borderRadius: 12, padding: "10px 24px", textAlign: "center",
            }}>
              <div style={{ fontWeight: 800, fontSize: 22, color: "#7C3AED" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search + Filter */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search by name or role..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            flex: 1, minWidth: 200, padding: "10px 16px",
            border: "1px solid #E2E8F0", borderRadius: 10,
            fontSize: 14, outline: "none", background: "#fff",
            color: "#1E293B",
          }}
        />
        <select
          value={filterRole}
          onChange={e => setFilterRole(e.target.value)}
          style={{
            padding: "10px 16px", border: "1px solid #E2E8F0",
            borderRadius: 10, fontSize: 13, background: "#fff",
            color: "#1E293B", cursor: "pointer",
          }}
        >
          {allRoles.map(r => <option key={r}>{r}</option>)}
        </select>
      </div>

      {filteredBatches.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#94A3B8" }}>
          No members found matching your search.
        </div>
      ) : (
        filteredBatches.map((batch, i) => (
          <BatchSection key={batch.year} batch={batch} defaultOpen={i === 0} />
        ))
      )}

      {/* Footer note */}
      <div style={{
        textAlign: "center", marginTop: 40, padding: 20,
        background: "#FFF7ED", borderRadius: 12,
        border: "1px solid #FED7AA",
      }}>
        <p style={{ color: "#9A3412", fontSize: 13, margin: 0 }}>
          We apologize if your name is not listed. Please contact our web team at <strong>7440682926</strong>.
        </p>
      </div>
    </div>
  );
}