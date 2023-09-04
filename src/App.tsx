import { FC } from "react";
import { useRequest } from "ahooks";
import { getChance, postChance } from "./api";
import { formatISODate } from "./utils";
import { useAppReady, uiModule } from "mincu-react";
import Loading from "./loading";

interface Props {}

const App: FC<Props> = () => {
  useAppReady(() => {
    // alert('请在南大家园APP中打开')
  });
  const { data, loading, refresh, mutate } = useRequest(getChance);
  const { runAsync, error } = useRequest(postChance, { manual: true });
  // console.log(data, loading);
  error && uiModule?.toast.fail(error.message);
  return (
    <div className="subpixel-antialiased">
      <div
        className="fixed -z-10 w-screen h-screen bg-no-repeat bg-center"
        style={{
          backgroundColor: "#9ED1C9",
          backgroundImage: 'url("./bg.jpg")',
        }}
      />
      <div className="flex flex-col items-center pt-20 ">
        {data?.data ? (
          <>
            <div className="text-6xl mb-8">{data?.data?.remain}</div>
            <div className="mb-2 text-lg">
              你还有{data?.data?.remain}次扭蛋机会
            </div>

            <button
              className="px-6 py-2 rounded bg-black hover:bg-green-600 text-white"
              onClick={async () => {
                try {
                  const res = await runAsync();
                  if (res.data) uiModule?.toast.success("扭蛋成功");
                  refresh();
                } catch (err) {
                  console.log("error", err);
                  uiModule?.toast.fail(err?.message);
                }
              }}
            >
              消耗
            </button>
          </>
        ) : (
          <Loading />
        )}
      </div>
      {data?.data?.records.length > 0 && (
        <div className="bg-white bg-opacity-60 backdrop-blur-sm shadow-lg rounded-lg p-4 mt-5">
          <div className="font-medium">今日扭蛋记录</div>
          {data?.data?.records.map((item) => {
            return <div>{formatISODate(item?.CreatedAt)}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
