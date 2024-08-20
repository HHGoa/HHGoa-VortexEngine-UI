import { EntityAdded as EntityAddedEvent } from "../generated/Contract/Contract"
import { EntityAdded } from "../generated/schema"

export function handleEntityAdded(event: EntityAddedEvent): void {
  let entity = new EntityAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Contract_id = event.params.id
  entity.user = event.params.user
  entity.dataUri = event.params.dataUri
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
