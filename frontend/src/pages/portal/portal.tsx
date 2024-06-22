import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import { APP_INFO } from "../../libs";
import { useNavigate } from "react-router-dom";

export const Portal = () => {
    const navigate = useNavigate();

    return (
        <div className="container grid gap-4 grid-cols-1 md:grid-cols-3 md:w-full lg:grid-cols-5">
            {APP_INFO.map((app) => (
                <Card
                    isPressable={true}
                    key={app.id}
                    onClick={() => navigate(`${app.id}`)}
                    className="py-4"
                >
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">
                            {app.name}
                        </p>
                        <small className="text-default-500">
                            {app.description}
                        </small>
                        <h4 className="font-bold text-large">{app.name}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                            width={270}
                        />
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};