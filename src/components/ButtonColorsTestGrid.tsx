import { Button } from "./ui/Button";

const ButtonColorsTestGrid = () => {
  const btnList = ["default", "destructive", "outline", "secondary", "ghost"];

  return (
    <div className="grid grid-cols-2 gap-2">
      {btnList.map((btn, i) => {
        return (
          <div key={i} className="h-32 grid place-content-center">
            <Button variant={btn}>{btn}</Button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonColorsTestGrid;
