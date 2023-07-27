// Sidebar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Modal from './Modals/Modal';
import ProjectModal from './Modals/ProjectModal';
import AgentModal from './Modals/AgentModal';

const Bar = styled.div`
  font-size: 1.2rem;
  top: 200px;
  height: 250px;
  width: 270px;
`;

const Center = styled.div`
  height: 1;
  margin:5%;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
margin: 15px;
font-size:1.2rem;
`;

const Sidebar = () => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [agentModalOpen, setAgentModalOpen] = useState(false);
  const navigate = useNavigate();

  const openProjectModal = () => {
    setProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setProjectModalOpen(false);
  };

  const openAgentModal = () => {
    setAgentModalOpen(true);
  };

  const closeAgentModal = () => {
    setAgentModalOpen(false);
  };

  const handleNextStep = () => {
    closeProjectModal();
    openAgentModal();
  };

  return (
    <>
      <Bar>
        <Center>
          <button type="button" className="btn btn-danger" onClick={openProjectModal}>
            프로젝트 +
          </button>
          <div className="space"></div>
          <button type="button" className="btn btn-danger" onClick={openAgentModal}>
            에이전트 +
          </button>
        </Center>
        <Title>
          <a>프로젝트 목록</a>
        </Title>
        <Navigation
          onSelect={({ itemId }) => {
            navigate(itemId);
          }}
          items={[]}
        />
      </Bar>

      <Modal open={projectModalOpen} close={closeProjectModal} header="프로젝트 등록">
        <ProjectModal close={handleNextStep} />
      </Modal>

      <Modal open={agentModalOpen} close={closeAgentModal} header="에이전트 등록">
        <AgentModal close={closeAgentModal} />
      </Modal>
    </>
  );
};

export default Sidebar;
