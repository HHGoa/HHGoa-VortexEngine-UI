import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { EntityAdded } from "../generated/schema"
import { EntityAdded as EntityAddedEvent } from "../generated/Contract/Contract"
import { handleEntityAdded } from "../src/contract"
import { createEntityAddedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let dataUri = "Example string value"
    let timestamp = BigInt.fromI32(234)
    let newEntityAddedEvent = createEntityAddedEvent(
      id,
      user,
      dataUri,
      timestamp
    )
    handleEntityAdded(newEntityAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EntityAdded created and stored", () => {
    assert.entityCount("EntityAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EntityAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EntityAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dataUri",
      "Example string value"
    )
    assert.fieldEquals(
      "EntityAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
