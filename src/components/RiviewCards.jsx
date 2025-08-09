import { Star } from "lucide-react"

export default function ReviewCards() {
  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "99%", label: "Satisfied & Happy Clients" },
    { value: "600+", label: "Projects Completed" },
    { value: "27+", label: "Top Industries Served" },
  ]

  return (
    <section className="relative  py-24 px-4 md:px-6 lg:px-8 text-white overflow-hidden">
      {/* Background glows - copied from Hero component */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-gray-700/30 to-transparent rounded-full filter blur-3xl opacity-50"></div> */}
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-tl from-gray-700/30 to-transparent rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-gradient-to-bl from-gray-700/20 to-transparent rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Star Rating and Text */}
        <div className="flex justify-center items-center mb-4">
          <Star className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
          <span className="ml-2 text-lg font-semibold">5.0</span>
        </div>
        <p className="text-lg md:text-xl text-gray-300 mb-12">100+ clients love to work with us.</p>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" bg-black rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg"
            >
              <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
