import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";;
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";
const TripsPage= async()=>{
    const currenntUser=await getCurrentUser();

    if(!currenntUser){
        return(
            <ClientOnly>
                <EmptyState
                title="Unauthorized"
                subtitle="Please Login"
                />
            </ClientOnly>
        )
    }
    const reservations = await getReservations({
        userId: currenntUser.id
    });
    if(reservations.length === 0){
        return(
            <ClientOnly>
                <EmptyState
                title="No trips found"
                subtitle="Looks like you haven't reserverd any trips."
                />
            </ClientOnly>
        )
    }
    return(
        <ClientOnly>
            <TripsClient
            reservations={reservations}
            currentUser={currenntUser}
            />
        </ClientOnly>
    )
}
export default TripsPage;