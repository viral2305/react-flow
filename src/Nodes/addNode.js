import React, { Fragment, useCallback, useRef, useState } from 'react';
import ReactFlow,{MiniMap,Background,useEdgesState,useNodesState, addEdge,updateEdge} from 'react-flow-renderer/nocss';
import Button from './Button';


const initialElement = [
  {
    id: '1',
    type: 'input',
    data: { label: 'First Node' },
    position: { x: 100, y:0},
  }
]

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
}
const edgeTypes = {
  buttonedge: '',
};

const MindNodes = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialElement);
  const [edges, setEdges,onEdgesChange] = useEdgesState([]);
  const [name, setName] = useState('');
  const yPos = useRef(0);
  const onConnect = (params) => setEdges(e => addEdge({...params,type:'buttonedge',label:'X'},e))
  // const onConnect = useCallback(
  //   (connection) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges])
// const onLabelChange = (e) => {
//     console.log("EVENT",e.target.name);
// }
const onNodeClick = (e,data) => {
  console.log("EVENT",data);
  let index = nodes.findIndex((ele) => ele.id === data.id);
  console.log(index)
}
  // const onEdgeUpdate = (oldEdge, newConnection) => {
  //   setNodes((els) => updateEdge(oldEdge, newConnection, els));
  // }

  // const onEdgeClick = (event,data) => {
  //   let index = edges.findIndex((ele) => ele.id === data.id);
  //   edges.splice(index,1);
  //   setEdges([...edges]);
  //
  // };
  const addNode = () => {
    yPos.current += 50;
   setNodes(e =>
     e.concat({
     id:(e.length+1).toString(),
     data: {label: `${name}`},
     position: {x:100,y:yPos.current}
   }));
    setName('');
  };
  return(
    <Fragment>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onEdgeUpdate={onEdgeUpdate}
        onNodeClick={onNodeClick}
        onLoad={onLoad}
        onConnect={onConnect}
        connectionLineType='bezier'
        // edgeTypes={edgeTypes}
        connectionLineStyle={{stroke: '#ddd', strokeWidth: 1}}
        // onEdgeClick={onEdgeClick}
        snapToGrid={true}
        snapGrid={[16,16]}>

        <MiniMap
          nodeColor={node => {
            if(node.type === "input") return 'blue';
            if(node.type === "output") return 'blue';
            if(node.type === "default") return 'blue';
            return '#ffcc00'
          }}/>
          <Background color='#888'
                      gap={16}/>
      </ReactFlow>

        <div>
          <input type="text"
                 onChange={e => setName(e.target.value)}
                 value={name}
                 name="title"/>
          <button type='button'
          onClick={addNode}>Add Node</button>

        </div>
    </Fragment>
  )
}
export default MindNodes;