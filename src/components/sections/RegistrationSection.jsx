import { motion } from "framer-motion";
import { FaTicketAlt } from "react-icons/fa";
import { useState } from "react";
import SuccessModal from "../ui/SuccessModal";
import api from "../../services/api";

export default function RegistrationSection() {
const [form, setForm] = useState({
  studentNo: "",
  fullName: "",
  college: "",
  course: "",
  year: "",
  facebookName: "",
  agreed: false,
});
const [loading, setLoading] = useState(false);
const [open, setOpen] = useState(false);

const collegeCourses = {
  "College of Engineering and Information Technology": [
    "Bachelor of Science in Information Technology",
    "Bachelor of Science in Computer Science",
  ],

  "College of Accountancy and Business Management": [
    "Bachelor of Science in Accountancy",
    "Bachelor of Science in Management Accounting",
    "Bachelor of Science in Financial Management",
    "Bachelor of Science in Marketing Management",
    "Bachelor of Science in Business Administration",
  ],

  "College of Nursing": [
    "Bachelor of Science in Nursing",
  ],

  "College of Education": [
    "Bachelor of Elementary Education",
    "Bachelor of Secondary Education",
  ],
};

  function handleChange(e) {
  const { name, value, type, checked } = e.target;

  if (name === "college") {
    setForm({
      ...form,
      college: value,
      course: "",
    });

    return;
  }

  setForm({
    ...form,
    [name]: type === "checkbox" ? checked : value,
  });
}

  async function handleSubmit(e) {
  e.preventDefault();

  if (!form.agreed) {
    alert("Please like and follow the SSG Facebook Page first.");
    return;
  }

  setLoading(true);

  try {
    const response = await api.post("/raffle/register", {
      student_number: form.studentNo,
      full_name: form.fullName,
      course: form.course,
      year_level: form.year,
      facebook_name: form.facebookName,
    });

    console.log(response.data);

    setOpen(true);

    setForm({
      studentNo: "",
      fullName: "",
      college: "",
      course: "",
      year: "",
      facebookName: "",
      agreed: false,
    });

  } catch (error) {

    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Unable to connect to the server.");
    }

  } finally {
    setLoading(false);
  }
}
  return (
    <section
      id="register"
      className="bg-[#FFF8F2] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-[#A31621]">
            REGISTRATION
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Join the Grand Raffle
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Complete the form below to officially enter the raffle.
          </p>

        </motion.div>

        <motion.form
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  onSubmit={handleSubmit}
  className="mx-auto mt-16 max-w-4xl rounded-[35px] bg-white p-10 shadow-2xl"
>

  <div className="mb-8">
    <h3 className="text-2xl font-bold text-[#A31621]">
      Student Information
    </h3>

    <p className="text-gray-500">
      Fill out all required information.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">

    {/* Student Number */}

    <input
      type="text"
      name="studentNo"
      value={form.studentNo}
      onChange={handleChange}
      required
      placeholder="Student Number"
      className="rounded-xl border p-4 transition focus:border-[#A31621] focus:ring-2 focus:ring-red-200 outline-none"
    />

    {/* Name */}

    <input
      type="text"
      name="fullName"
      value={form.fullName}
      onChange={handleChange}
      required
      placeholder="Full Name"
      className="rounded-xl border p-4 transition focus:border-[#A31621] focus:ring-2 focus:ring-red-200 outline-none"
    />

    {/* College */}

    <select
      name="college"
      value={form.college}
      onChange={handleChange}
      required
      className="rounded-xl border p-4 transition focus:border-[#A31621] focus:ring-2 focus:ring-red-200"
    >

      <option value="">Select College</option>

      {Object.keys(collegeCourses).map((college) => (

        <option
          key={college}
          value={college}
        >
          {college}
        </option>

      ))}

    </select>

    {/* Course */}

    <select
      name="course"
      value={form.course}
      onChange={handleChange}
      required
      disabled={!form.college}
      className="rounded-xl border p-4 transition disabled:bg-gray-100 disabled:text-gray-400 focus:border-[#A31621] focus:ring-2 focus:ring-red-200"
    >

      <option value="">
        Select Course
      </option>

      {form.college &&
        collegeCourses[form.college].map((course) => (

          <option
            key={course}
            value={course}
          >
            {course}
          </option>

        ))}

    </select>

    {/* Year */}

    <select
      name="year"
      value={form.year}
      onChange={handleChange}
      required
      className="rounded-xl border p-4 transition focus:border-[#A31621] focus:ring-2 focus:ring-red-200"
    >

      <option value="">Year Level</option>

      <option>1st Year</option>
      <option>2nd Year</option>
      <option>3rd Year</option>
      <option>4th Year</option>

    </select>

    {/* Facebook */}

    <input
      type="text"
      name="facebookName"
      value={form.facebookName}
      onChange={handleChange}
      required
      placeholder="Facebook Name"
      className="rounded-xl border p-4 transition focus:border-[#A31621] focus:ring-2 focus:ring-red-200 outline-none"
    />

  </div>

  <label className="mt-8 flex cursor-pointer items-start gap-3 rounded-xl bg-red-50 p-4">

    <input
      type="checkbox"
      name="agreed"
      checked={form.agreed}
      onChange={handleChange}
      required
      className="mt-1 accent-[#A31621]"
    />

    <span className="text-sm text-gray-700">
      I confirm that I have
      <span className="font-semibold text-[#A31621]">
        {" "}liked and followed{" "}
      </span>
      the official SSG Facebook Page and that the information I provided is correct.
    </span>

  </label>

  <motion.button

    whileHover={{
      scale: 1.02,
    }}

    whileTap={{
      scale: .98,
    }}

    disabled={loading}

    className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#A31621] to-[#C62828] py-5 text-lg font-bold text-white shadow-lg transition disabled:cursor-not-allowed disabled:opacity-60"

  >

    <FaTicketAlt />

    {loading ? "Submitting..." : "Join the Grand Raffle"}

  </motion.button>

</motion.form>

      </div>
      <SuccessModal
  open={open}
  onClose={() => setOpen(false)}
/>

    </section>
  );
}