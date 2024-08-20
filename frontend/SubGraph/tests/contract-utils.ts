import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { EntityAdded } from "../generated/Contract/Contract"

export function createEntityAddedEvent(
  id: BigInt,
  user: Address,
  dataUri: string,
  timestamp: BigInt
): EntityAdded {
  let entityAddedEvent = changetype<EntityAdded>(newMockEvent())

  entityAddedEvent.parameters = new Array()

  entityAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  entityAddedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  entityAddedEvent.parameters.push(
    new ethereum.EventParam("dataUri", ethereum.Value.fromString(dataUri))
  )
  entityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return entityAddedEvent
}
