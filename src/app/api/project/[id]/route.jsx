export async function GET(params) {
  const AllProject = await prisma.project.findFirst({
    where: {
      id: params.id,
    },
    include: {
      ProjectImage: true,
    },
  });
  return NextResponse.json(Project);
}
