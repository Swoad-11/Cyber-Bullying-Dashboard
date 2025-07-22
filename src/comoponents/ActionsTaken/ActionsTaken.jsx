export default function ActionsTaken({ title, total, actionsTaken, noAction }) {
  return (
    <>
      <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
        <div className="flex gap-2 justify-around text-center text-pink-400 font-semibold">
          <div>
            <p className="text-4xl max-[450px]:text-2xl">{total}</p>
            <p className="text-sm text-gray-400">Total Reports</p>
          </div>
          <div>
            <p className="text-4xl max-[450px]:text-2xl">{actionsTaken}</p>
            <p className="text-sm text-gray-400">Actions Taken</p>
          </div>
          <div>
            <p className="text-4xl max-[450px]:text-2xl">{noAction}</p>
            <p className="text-sm text-gray-400">No Action</p>
          </div>
        </div>
      </div>
    </>
  );
}
