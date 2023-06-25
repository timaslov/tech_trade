<template>
  <CreateAtomicRule
      @atomic_rule_created="AtomicRuleCreatedHandler"
  >
  </CreateAtomicRule>

  <div class="mt-10 flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">

      <h1 class="text-center text-xl"> Атомарные правила: </h1>
      <ul class="ml-2">
        <li v-for="atomic_rule in atomicRules" :key="atomic_rule.id"> {{atomic_rule.name}} </li>
      </ul>


      <h1 class="text-center text-xl"> Связывание атомарных правил в логику </h1>

      <div class="grid grid-cols-2 gap-2">
        <div class="border-2 border-indigo-300 rounded-lg w-full">
          <div class="flex flex-wrap">
            <draggable
                v-model="atomicRulesCopy"
                group="people"
                @start="drag=true"
                @end="drag=false"
                item-key="id"
                tag="div"
                class="inline-flex flex-wrap content-start items-start w-full"
                :options="{ group: { pull: 'clone' }, sort: false }">
              <template #item="{element}">
                <LogicElement class="m-1" :label="element.name"></LogicElement>
              </template>
            </draggable>
          </div>
        </div>

        <div class="border-2 border-indigo-300 rounded-lg w-full">
          <div class="flex flex-wrap">
            <draggable
                v-model="operators"
                group="people"
                @start="drag=true"
                @end="drag=false"
                item-key="id"
                tag="div"
                class="inline-flex flex-wrap content-start items-start w-full"
                >
              <template #item="{element}">
                <LogicElement class="m-1" :label="element.name"></LogicElement>
              </template>
            </draggable>
          </div>
        </div>

      </div>

      <div class="border-2 border-indigo-300 rounded-lg w-full min-h-[50px]">
        <div class="flex flex-wrap">
          <draggable
              v-model="resArray"
              group="people"
              @start="drag=true"
              @end="drag=false"
              item-key="id"
              tag="div"
              class="inline-flex flex-wrap content-start items-start w-full"
          >
            <template #item="{element}">
              <LogicElement class="m-1" :label="element.name"></LogicElement>
            </template>
          </draggable>
        </div>
      </div>

      <div class="border-2 border-indigo-300 rounded-lg w-1/3 h-[50px] bg-red-500">
        <div class="flex flex-wrap">
          <draggable
              v-model="trashArray"
              group="people"
              @start="drag=true"
              @end="drag=false"
              item-key="id"
              tag="div"
              class="inline-flex flex-wrap content-start items-start w-full"
          >
            <template #item="{element}">
              <LogicElement class="m-1" :label="element.name"></LogicElement>
            </template>
          </draggable>
        </div>
      </div>

    <label>{{ resExp }}</label>
    </div>
  </div>

</template>

<script>
import CreateAtomicRule from "@/components/CreateAtomicRule.vue";
import LogicElement from "@/components/LogicElement.vue";
import draggable from 'vuedraggable';
export default {
  name: "CreateLogic",

  components: {CreateAtomicRule, LogicElement, draggable},

  data() {
    return {
      operators: [{id: 1, name:'AND'}, {id:2, name:'OR'}, {id:3, name:'('}, {id:4, name:')'}],
      atomicRules: [{id:1, name:'plot1=plot2'}, {Id:2, name:'plot5<=plot2'},
                      {id:3, name:'plot4=>plot3'}, {id:4, name:'plot2>plot6'}, {id:5, name:'plot1<plot2'}],
      atomicRulesCopy: [],
      resArray: [],
      alert: {plot1: '123', plot2: '54', plot3: '543', plot4: '231', plot5: '11'},
      atomicRulesQty: 0,
      trashArray: [],
      drag: false,
      resExp: '',
    };
  },

  methods: {
    AtomicRuleCreatedHandler(data) {
      if (this.atomicRules.find(obj => obj.name === data)) {
        console.log('Такое уже есть')
      }
      else {
        this.atomicRules.push({id: this.atomicRulesQty+1, name: data})
      }

    },

    restoreOperatorsArray() {
      this.operators = [{id: 1, name:'AND'}, {id:2, name:'OR'}, {id:3, name:'('}, {id:4, name:')'}]
    },
    copyAtomicRulesArray() {
      this.atomicRulesCopy = this.atomicRules
    },
    clearTrashArray() {
      this.trashArray = []
    },
    createResultExp() {
      this.resExp = ''
      for (const elem of this.resArray)
        this.resExp += ' ' + elem.name
    },

  },

  created() {
    this.copyAtomicRulesArray()
    this.atomicRulesQty = this.atomicRules.length
  },

  watch: {
    operators: {
      handler: 'restoreOperatorsArray'
    },
    atomicRulesCopy: {
      handler: 'copyAtomicRulesArray'
    },
    atomicRules: {
      handler: 'copyAtomicRulesArray'
    },
    trashArray: {
      handler: 'clearTrashArray'
    },
    resArray: {
      handler: 'createResultExp'
    },
  }

}
</script>
