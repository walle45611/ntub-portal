import { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { REMOTE_APP } from "../../libs";

export const AppDetail = () => {
    const { id = "" } = useParams();
    const [RemoteComponent, setRemoteComponent] =
        useState<React.ComponentType | null>(null);

    useEffect(() => {
        return setRemoteComponent(REMOTE_APP[parseInt(id)]);
    }, [id]);

    return (
        <div className="container">
            <Suspense fallback={<div>Loading Remote Application...</div>}>
                {RemoteComponent && <RemoteComponent />}
            </Suspense>
        </div>
    );
};